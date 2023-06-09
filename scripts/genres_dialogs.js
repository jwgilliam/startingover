const initializeDetailButtonGenres = () => {
  const allCloseButtons = document.querySelectorAll(".button--close")
  for (const btn of allCloseButtons) {
    btn.addEventListener("click",
      thisEvent => {
        const dialogElement = thisEvent.target.parentNode
        dialogElement.close()
      }
    )
  }

  document.querySelector("#button--rpg").addEventListener("click",
    thisEvent => {
      const dialogElement = document.querySelector("#details--rpg")
      dialogElement.showModal()
    }
  )
  document.querySelector("#button--fps").addEventListener("click",
    thisEvent => {
      const dialogElement = document.querySelector("#details--fps")
      dialogElement.showModal()
    }
  )
  document.querySelector("#button--mmo").addEventListener("click",
    thisEvent => {
      const dialogElement = document.querySelector("#details--mmo")
      dialogElement.showModal()
    }
  )
}




export default initializeDetailButtonGenres