<h3>Example of usage:</h3>

<p>ExampleModal/index.jsx</p>

```js
const { isOpen, open, close } = useModal('ExampleModal');

return (
  <Modal isOpen={isOpen}>
    {...}
  </Modal>
)
```

<p>SomeComponent/index.js</p>

```js
const { open } = useModal('ExampleModal');

return (
  <Button onClick={() => open()} label="Open Modal!" />
)
```
