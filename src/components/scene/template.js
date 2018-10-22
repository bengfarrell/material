export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<script src='./babylon.custom.js'>
                </script><canvas map="scene" touch-action="none"></canvas>`
    },

    css() {
        return `<style>  
                  :host {
                    display: inline-block;
                    width: 100%;
                    height: 100%;   
                  }
                  canvas {
                    width: 100%;
                    height: 100%;   
                  }  
                </style>`;
    }
}
