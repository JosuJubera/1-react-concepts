class Papa extends React.Component {
    constructor(props) {
      // Elevamos las props a la clase de herencia
      super(props);
      
      // Definimos estado
      this.state = {
        valor: 1,
        isShowingComponent: true
      }
      
      // Creamos binding
      this.cambiaValor = this.cambiaValor.bind(this);
      this.mataComponente = this.mataComponente.bind(this);
    }
  
    cambiaValor() {
      this.setState({valor: 2});
    }
  
    mataComponente() {
      this.setState({isShowingComponent: false});
    }
    
    render() {    
      return <div>
        {this.state.isShowingComponent && <Componente uno={this.state.valor} />}
        <button onClick={this.cambiaValor}>Cambio</button>
        
        <br />
        <br />
        <br />
        <br />
        
        <button onClick={this.mataComponente}>Quita componente</button>
      
      </div>;
    }
  
  
  }
  
  class Componente extends React.Component {
    constructor(props) {
      super(props);
      
      console.log("--- Fase de Construcción");
      
      this.state = {
        prop1: "value1",
        prop2: "value2"
      };
    }
    
    componentDidMount() {
      console.log("--- Fase DidMount (+ cambio en state)");
      
      this.setState({
        prop1: "Otro valor"
      });
    }
    
    render() {
      console.log("--- Fase de Render");
      
      return <p>Hola {this.state.prop1}</p>
    }
    
    componentDidUpdate(prevProps, prevState) {
      console.log("--- Fase DidUpdate");
      
      console.log("[PROPS]", prevProps, this.props);
      console.log("[STATE]", prevState, this.state);
    }
    
    componentWillUnmount() {
      console.log("--- Fase WillUnmount");
    }
    
  }
  
  
  const el = <Papa />;
  
  
  ReactDOM.render(el, document.getElementById("root"));