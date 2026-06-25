import html2canvas from 'html2canvas';
import type { ExportOptions } from './types';

export async function exportToImage(element: HTMLElement, options: ExportOptions = {}) {
  const canvas = await html2canvas(element, { scale: options.scale ?? 2 });
  const link = document.createElement('a');
  link.download = options.fileName ?? 'resume.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
