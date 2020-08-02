const form = document.querySelector("#infos")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit", (event) => {
event.preventDefault()
 if (email.value === "") {
	if (email.value === "") {
		emailHelp.innerText = "Campo obligatorio"
	}
  } else {
    form.submit();
  }

})