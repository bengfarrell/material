export default {
    render() {
        return `${this.designSystem()}
                ${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<div map="overlay" id="bg-overlay"></div>
                <div map="thumb" id="thumb"></div>`;
    },

    css() {
        return `<style>
                    :host {
                        display: inline-block;
                        position: relative;
                    }
                    
                    #bg-overlay {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                    }
                    
                    #thumb {
                        width: 5px;
                        height: calc(100% - 5px);
                        position: absolute;
                        border-style: solid;
                        border-width: 3px;
                        border-color: white;
                        border-radius: 10px;
                        pointer-events: none;
                    }
                </style>`;
    },

    designSystem() {
        return ``;
    }
}
