type Id = `#${string}`

export const GoToId = (id: Id) => {
    console.log(id)
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth'  });
    }
}
