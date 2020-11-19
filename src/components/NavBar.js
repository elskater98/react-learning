const {Component} = require("react");

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
            randomId: 0
        }
        this.handleClick2 = this.changeId2.bind(this)
    }

    changeId2() {
        this.setState(state => ({
            randomId: Math.random()
        }))
    }

    changeId() {
        this.setState({randomId: Math.floor(Math.random() * 10) + 1})
    }

    changeBool() {
        this.setState({
            isLogged: !this.state.isLogged
        })
    }


    render() {
        return (
            <div>
                Navigation Bar {this.state.randomId} {this.props.color} {this.state.isLogged.toString()}
                <button onClick={() => this.changeId()}>Integer</button>
                <button onClick={this.handleClick2}>Float</button>
                <button onClick={() => this.changeBool()}>Click me!</button>
            </div>
        )
    }
}

export default NavBar
