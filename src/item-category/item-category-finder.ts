import { Item } from '../item/item';
import { ItemCategory } from './item-category';

export class ItemCategoryFinder {
  private categoryMatches: Record<string, ItemCategory> = {
    chocolate: 'food',
    book: 'book',
    pills: 'medical',
  };

  find(item: Item): ItemCategory {
    const category = Object.keys(this.categoryMatches).find(
      (categoryMatcher) => !!item.getLabel().match(new RegExp(categoryMatcher))
    );

    if (!category) {
      return 'generic';
    }

    return this.categoryMatches[category];
  }
}
