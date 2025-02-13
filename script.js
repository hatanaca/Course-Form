document.addEventListener("DOMContentLoaded", () => {
	const courseForm = document.getElementById("course-name");
	const courseList = document.getElementById("course-list");


	courseForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const name = document.getElementById("course-name").value;
		const description = document.getElementById("course-description").value;
		const duration = document.getElementById("course-duration").value;

		if (name && description && duration) {
			const listItem = document.createElement("li");
			listItem.innerHTML = `<strong>${name}</strong> - ${description} (${duration} hours)`;
			courseList.appendChild(listItem);

			courseForm.reset();
		} else {
			alert("Please fill out all fields!");
		}
	});
});
