import Node from "./Node";

export default interface TreeMap<K, V> {

    put(key: K, value?: V, absentOnly?: boolean): V | null;

    get(key: K): V | null;

    remove(key: K): V | null;

    size(): number;

    firstNode(): Node<K, V> | null;

    lastNode(): Node<K, V> | null;

    higherNode(): Node<K, V> | null;

    lowerNode(): Node<K, V> | null;

    floorNode(): Node<K, V> | null;

    ceilingNode(): Node<K, V> | null;

    keySet(): Set<K>;

    values(): V[];
}