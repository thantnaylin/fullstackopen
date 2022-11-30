import Part from "./Part";

const Content = ({ parts }) => {

    return parts.map((item, index) => <Part name={item.name} exercises={item.exercises} key={index}/>);
}

export default Content;