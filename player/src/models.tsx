interface Item {
    id: string;
    title: string;
    creator: string;
    url: string;
    thmb: string;
}

interface List {
    id: string;
    title: string;
    items: Item[];
}

interface Feed {
    id: string;
    name: string;
    hero: List;
    lists: List[];
}

export type {Item, List, Feed};
