import Button from "./button.jsx";

const taskCTA = (props) => {

    const {complete, index, remove, done} = props;

    if (!done) {
        return (
            <Button onClick={() => complete(index)}>
                <img src="/check-list.png" alt="Check task"/>
            </Button>
        )
    }

    return <Button onClick={() => remove(index)}>
        <img src="/delete-forever.png" alt="Delete forever"/>
    </Button>
}

export default taskCTA;