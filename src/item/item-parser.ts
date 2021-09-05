import { Item } from './item';

export class ItemParser {
  /**
   * Parses a rawItem string and returns a concrete implementation of item.
   */
  parse(rawItem: string): Item {
    const informations = rawItem.match(
      /(?<quantity>\d+) (?<label>.+) (?<price>[+-]?([0-9]*[.])?[0-9]+)/
    );

    const label = (informations?.groups?.label ?? '').replace(' at', '').trim();

    const quantity = +(informations?.groups?.quantity ?? 0);

    const price = +(informations?.groups?.price ?? 0);

    return new Item(label, quantity, price);
  }
}
