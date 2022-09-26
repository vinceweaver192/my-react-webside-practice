
const Content = () => {

    const handleNameChange = () => {
        const names = ['Bro', 'Dab', 'Ass'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content