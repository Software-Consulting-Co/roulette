

export default (props) => {

    const saveEmail = () => {
        localStorage.setItem('custom-email', 'example@acb.com')
        props.onSubmit && props.onSubmit();
    }

    return (<div>
        <div>Enter your email first</div>
        <input type="text" />
        <button onClick={saveEmail}>Submit</button>
    </div>)
}