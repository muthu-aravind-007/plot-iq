export default function DownloadReport() {
  return (
    <a
      href="http://127.0.0.1:8000/report/pdf"
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl bg-emerald-500 py-4 text-center text-lg font-semibold text-black transition hover:bg-emerald-400"
    >
      Download PDF Report
    </a>
  );
}