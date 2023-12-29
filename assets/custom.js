$('select[name="id"]').on('change', function() {
  let selectedVariantId = $(this).val();
  let selectedVariant = product.variants.find(variant => variant.id == selectedVariantId);
  if (selectedVariant.metafields.size_description) {
    $('#variant-description').text(selectedVariant.metafields.size_description);
  } else {
    $('#variant-description').text('');
  }
});
