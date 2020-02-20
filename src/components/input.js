function Input(props) {
  const template = `
      <input class="${props.class}" 
      placeholder="${props.placeholder}" 
      type="${props.type}" 
      id="${props.id}"
      name="${props.name}">
      `;
  return template;
}

export default Input;
