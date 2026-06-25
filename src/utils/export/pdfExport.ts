import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import type { ExportOptions } from './types';

export async function exportToPdf(element: HTMLElement, options: ExportOptions = {}) {
  const canvas = await html2canvas(element, { scale: options.scale ?? 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({ unit: 'px', format: [canvas.width, canvas.height] });
  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save(options.fileName ?? 'resume.pdf');
}
