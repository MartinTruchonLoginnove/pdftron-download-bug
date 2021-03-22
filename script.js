WebViewer(
  {
    path: "http://localhost:8080/WebViewer/lib",
    initialDoc: "http://localhost:8080/document.xlsx",
    extension: "xlsx"
  },
  document.getElementById("viewer")
).then((instance) => {
  document.getElementById("download").onclick = async () => {
    instance.downloadPdf({ filename: "test.xlsx", downloadType: "office" });
  };
});
