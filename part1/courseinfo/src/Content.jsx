import Part from "./Part";

const Content = ({ courseDetails }) => {
    const parts = courseDetails.map((item, index) => <Part part={item.part} exercise={item.exercise} key={index}/>);

    return parts;
}

export default Content;