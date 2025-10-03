class Modal {
    constructor() {
        this._modal = document.querySelector("#modal");
        this._modalBtn = document.querySelector("#modal-btn")
        this.addEventListeners()
    }

    addEventListeners() {
        this._modalBtn.addEventListener("click", this.open)
        window.addEventListener('click', this.outsideClick)
    }

    open = ()=>{
        this._modal.style.display = 'block'
    }

    close = ()=>{
        this._modal.style.display = 'none'
    }

    outsideClick = (e)=>{
        if (e.target === modal) {
            this.close()
        }
    }
}

export default Modal