const useDownloadPDF = (pdfLink: string) => {
  const handleDownloadPDF = async () => {
    const response = await fetch(pdfLink);
    const blob = await response.blob();
    const pdfName = pdfLink.split("/").reverse()[0];

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", pdfName);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
  };

  return handleDownloadPDF;
};

export default useDownloadPDF;
