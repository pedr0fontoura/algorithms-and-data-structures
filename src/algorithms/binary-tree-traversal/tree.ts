export type BinaryNode<T> = {
  value: T,
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
}

export const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
        },
        left: {
            value: 30,
            right: {
                value: 45,
            },
            left: {
                value: 29,
            }
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
        },
        left: {
            value: 5,
            right: {
                value: 7,
            },
        }
    }
};