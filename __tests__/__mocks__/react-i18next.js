const React = require('react');
const reactI18next = require('react-i18next');

const hasChildren = (node) => node && (node.children || (node.props && node.props.children));

const getChildren = (node) => (node && node.children ? node.children : node.props && node.props.children);

const renderNodes = (reactNodes) => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren(child)) {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const inner = renderNodes(getChildren(child));
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce((str, childKey) => `${str}${child[childKey]}`, '');
    }

    return child;
  });
};

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withNamespaces: () => (Component) =>
    // eslint-disable-next-line func-names, react/display-name
    function (props) {
      return <Component t={(k) => k} {...props} />;
    },
  Trans: ({ children }) => renderNodes(children),
  NamespacesConsumer: ({ children }) => children((k) => k, { i18n: {} }),

  // mock if needed
  Interpolate: reactI18next.Interpolate,
  I18nextProvider: reactI18next.I18nextProvider,
  loadNamespaces: reactI18next.loadNamespaces,
  reactI18nextModule: reactI18next.reactI18nextModule,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n,
};
