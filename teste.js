const toggle = document.getElementById('toggle')
const sidebar = document.getElementById('sidebar')

document.addEventListener('click', (e)=> {
  if(e.target.id !== 'toggle' && e.target.id !== 'sidebar'){
    toggle.classList.remove('active')
    sidebar.classList.remove('active')
  }
})

toggle.addEventListener('click', ()=> {
  toggle.classList.toggle('active')
  sidebar.classList.toggle('active')
})