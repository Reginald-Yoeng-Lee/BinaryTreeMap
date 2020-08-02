import BinaryTreeMap from "./BinaryTreeMap";
import INode from "./Node";

export default class RedBlackTreeMap<K, V> extends BinaryTreeMap<K, V> {
    
    #root?: Node<K, V>;

    get(key: K): V | null {
        return null;
    }

    put(key: K, value?: V, absentOnly?: boolean): V | null {
        return value ?? null;
    }

    remove(key: K): V | null {
        return null;
    }

    size(): number {
        return 0;
    }
    
    ceilingNode(): Node<K, V> | null {
        return null;
    }

    firstNode(): Node<K, V> | null {
        return null;
    }

    floorNode(): Node<K, V> | null {
        return null;
    }

    higherNode(): Node<K, V> | null {
        return null;
    }

    lastNode(): Node<K, V> | null {
        return null;
    }

    lowerNode(): Node<K, V> | null {
        return null;
    }

    keySet(): Set<K> {
        return new Set<K>();
    }

    values(): V[] {
        return [];
    }
};

class Node<K, V> implements INode<K, V> {
    constructor(public key: K, public value?: V) {
    }
}