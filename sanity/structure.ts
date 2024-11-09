import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('ATVS Ecommerce')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('order').title('Orders'),
      S.documentTypeListItem('sale').title('Sales'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'product', 'order', 'sale'].includes(item.getId()!),
      ),
    ])
