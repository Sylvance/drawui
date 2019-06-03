const markup = `
 <div class="person">
    <h2>
        ${person.name}
    </h2>
    <p class="location">${person.location}</p>
    <p class="bio">${person.bio}</p>
 </div>
`;

document.body.innerHTML = markup;