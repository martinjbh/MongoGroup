import "./show.scss"
const Show = (props) => {
    return (
        <div class={`contenedor ${props.classe}`}>
            <h1>Total:{props.titulo}</h1>
        </div>
    )
}
export default Show;


