export default React.createClass({
  propTypes: {
    initiallyExpanded: React.PropTypes.bool
  },

  getInitialState() {
    return {
      expanded: this.props.initiallyExpanded
    };
  },

  render() {
    return <div onClick={ this.toggle } />;
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
});

export default React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  render() {
    const clsName = classNames({
      expanded: this.props.expanded
    });

    return <div className={ clsName }
                onClick={ this.props.onClick } />;
  }
});


export default React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool
  },

  getDefaultPropTypes() {
    return {
      expanded: false
    };
  }
});

<Form>
  <TextInput label="Name"/>
  <ColorPicker label="Favorite Color"/>
</Form>


const DataTable = React.createClass({
  propTypes: {
    columns: React.PropTypes.element,
    rows: React.PropTypes.element,
    pager: React.PropTypes.element
  }
});


<DataTable>
  <Column title="Name" />
  <Column title="FavoriteColor" />
  <Row rowIndex={ 0 } name="Suzy" color="black" />
  <Row rowIndex={ 1 } name="Fred" color="brown" />
  <Pager pageSize={ 2 } startIndex={ 0 } />
</DataTable>

render() {
  const columns = [];
  const rows = [];
  const pagers = [];

  React.Children.forEach(children, (child) => {
    if (child.type === Column) {
      columns.push(child);
    } else if (child.type === Row) {
      rows.push(child);
    } else if (child.type === Pager) {
      pagers.push(child);
    }
  });

  ...
}
