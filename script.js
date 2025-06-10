// Conexão com Are.na
class ArenaConnector {
  constructor() {
    this.baseUrl = ARE_NA_CONFIG.PROXY + encodeURIComponent(ARE_NA_CONFIG.API_BASE);
  }

  async fetchData(endpoint) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      headers: {'Authorization': `Bearer ${ARE_NA_CONFIG.TOKEN}`}
    });
    return response.json();
  }
}

// Gerenciamento de Interface
class UIManager {
  constructor() {
    this.canvas = document.getElementById('whiteboard');
    this.ctx = this.canvas.getContext('2d');
  }

  initCanvas() {
    this.canvas.width = window.innerWidth * 0.8;
    this.canvas.height = 600;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
  }
}
