$(function(){
  (function(){
    function getColumns($row){
      var col_classes = ['xs', 'sm', 'md', 'lg'];
      var $columns = $();
      for(var col_class_i=0; col_class_i<col_classes.length; col_class_i++){
        for(var cell_size_i=1; cell_size_i<=12; cell_size_i++){
          var column_class = 'col-' + col_classes[col_class_i] + '-' + cell_size_i;
          $.merge($columns, $row.find('> .' + column_class));
        }
      }
      return $columns;
    }
    function matchHeights($columns){
      var largest_height = 0;
      $columns.each(function(){
        var height = $(this).height();
        if (height > largest_height) largest_height = height;
      });
      $columns.each(function(){
        $(this).height(largest_height);
      });
    }

    $('[data-match-columns="true"]').each(function(){
      var $row = $(this);
      $columns = getColumns($row);
      matchHeights($columns);
    });
  })();
});
