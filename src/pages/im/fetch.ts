import { message } from 'antd';
import { extend, ResponseError } from 'umi-request';

export const request = extend({
  prefix: '/api/v1',
  timeout: 10000,
  errorHandler,
  method: 'post',
});

function errorHandler(error: ResponseError) {
  const codeMap = <Record<string, string>>{
    301: '资源已永久移动到新位置', // Moved Permanently
    302: '资源临时移动到新位置', // 未来可能恢复
    307: '资源临时移动到新位置', // 类似于 302 Found，表示所请求的资源临时移动到不同的位置。客户端应该使用新的 URL 发起请求，但未来应该继续使用原始的 URL。
    400: '请求中缺少必需的参数或参数格式不正确',
    401: '客户端未经授权访问受保护的资源',
    403: '服务器拒绝了客户端的请求，因为客户端没有访问所请求资源的权限', // 与 401 不同的是，服务器知道该客户端的身份，但拒绝了它的访问请求。
    404: '服务器无法找到请求的资源',
    405: '请求方法不正确', // 例如，服务器不允许 POST 请求，但客户端发送了一个 POST 请求
    408: '客户端请求超时', // 通常发生在客户端发送请求后，服务器在规定时间内未响应
    413: '客户端请求体过大，超过了服务器允许的大小限制',
    429: '客户端发送请求过于频繁，超出了服务器限制', // 这通常用于表示请求速率限制或配额超出
    500: '服务器错误',
    502: '服务器未收到上游服务器响应',
    503: '服务器暂时无法处理请求', // 通常由于服务器过载或者临时维护导致的
    504: '服务器等待上游服务器超时',
  };
  if (error.response) {
    const msg = error.data.message || codeMap[error.data.status]; // 请求已发送但服务端返回状态码非 2xx 的响应
    message.error(msg);
  } else {
    message.error(error.message); // 请求初始化时出错或者没有响应返回的异常
  }
  return { data: null, error };
  // throw error; // 如果throw. 错误将继续抛出.
  // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
  // return {some: 'data'};
}

request.use(async (ctx, next) => {
  const { req } = ctx;
  const { url } = req;

  // 判断是否需要添加前缀，如果是统一添加可通过 prefix、suffix 参数配置
  if (url.indexOf('/api') !== 0) {
    ctx.req.url = `/api/v1/${url}`;
  }
  await next();

  const { res } = ctx;
  const { success = false } = res; // 假设返回结果为 : { success: false, errorCode: 'B001' }
  if (!success) {
    console.log(res.message);
  }
});

request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  if (data && data.NOT_LOGIN) {
    location.href = '/login';
  }
  return response;
});
