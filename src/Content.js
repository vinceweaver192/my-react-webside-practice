
const Content = () => {

    const handleNameChange = () => {
        const names = ['Bro', 'Dab', 'Ass'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <header>
                My List
            </header>
            <p>
                Hello {handleNameChange()}, eat my ass!
            </p>
        </main>
    )
}

export default Content