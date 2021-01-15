import React from 'react';
import ReactDOM from 'react-dom';

const content = 'Кажется, мы подключили React  ';

const Component = (props) => <h1 className="element">{props.content}</h1>;

ReactDOM.render(
   <Component content={content} />,
   document.getElementById('root'),
);

// class Index extends React.Component {
//    state = {
//       counter: 0,
//    };

//    increase = () => {
//       this.setState({
//          counter: this.state.counter + 1,
//       });
//    };
//    render() {
//       return (
//          <div
//             style={{
//                display: 'flex',
//                justifyContent: 'space-between',
//                width: '200px',
//                margin: 'auto',
//                marginTop: '100px',
//             }} >
//             <span>{this.state.counter}</span>
//             <button onClick={this.increase}>INCREASE</button>
//          </div>
//       )
//    }
// }

// export default Index;