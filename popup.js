document.getElementById('downloadBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab.url.includes("youtube.com/watch")) {
    document.getElementById('status').innerText = "Processando...";
    
    // NOTA: Aqui você precisaria enviar a URL para um serviço que extrai o vídeo.
    // Exemplo conceitual usando uma API fictícia:
    const apiUrl = `https://https://github.com/Freitasone/Manifesto3/new/main/api?url=${encodeURIComponent(tab.url)}`;
    
    chrome.downloads.download({
      url: apiUrl,
      filename: "video_youtube.mp4",
      saveAs: true // Abre a janela para escolher onde salvar no drive local
    });
  } else {
    alert("Abra um vídeo do YouTube primeiro!");
  }
});
