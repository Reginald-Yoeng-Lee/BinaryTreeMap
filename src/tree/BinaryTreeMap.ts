import TreeMap from "./TreeMap";
import Node from "./Node";

export default abstract class BinaryTreeMap<K, V> implements TreeMap<K, V> {

    constructor(protected readonly compare: Comparator<K>) {
    }

    abstract put(key: K, value?: V, absentOnly?: boolean): V | null;

    abstract get(key: K): V | null;

    abstract remove(key: K): V | null;

    abstract size(): number;

    abstract firstNode(): Node<K, V> | null;

    abstract lastNode(): Node<K, V> | null;

    abstract higherNode(): Node<K, V> | null;

    abstract lowerNode(): Node<K, V> | null;

    abstract floorNode(): Node<K, V> | null;

    abstract ceilingNode(): Node<K, V> | null;

    abstract keySet(): Set<K>;

    abstract values(): V[];
}

export type Comparator<E> = (a: E, b: E) => number;