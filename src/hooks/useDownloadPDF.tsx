const useDownloadPDF = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/pdfs/test.pdf";
    link.setAttribute("download", "성공.pdf");
    link.click();
  };

  return handleDownloadPDF;
};

export default useDownloadPDF;
