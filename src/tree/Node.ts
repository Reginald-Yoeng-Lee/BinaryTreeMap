export default interface Node<K, V> {

    readonly key: K;

    value?: V;

    left?: Node<K, V>;

    right?: Node<K, V>;

    parent?: Node<K, V>;
}