import { ExcelSvg, FileSvg, PdfSvg, PPTSvg, WordSvg } from '@/assets/icon/svg';

export const FILE_ICON_MAP: Record<string, () => JSX.Element> = new Proxy(
  {
    pptx: PPTSvg,
    ppt: PPTSvg,
    docx: WordSvg,
    doc: WordSvg,
    pdf: PdfSvg,
    xlsx: ExcelSvg,
    xls: ExcelSvg,
  },
  {
    get: function (target, propKey, receiver) {
      if (!(propKey in target)) {
        return FileSvg;
      }
      return Reflect.get(target, propKey, receiver);
    },
  },
);
