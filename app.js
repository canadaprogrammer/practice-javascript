const convert = () => {
  let input_str = output_html = '';
  input_str = document.querySelector('#input_text').value.trim();
  console.log(input_str);
  if(input_str.length > 0) {
    let list_wrapper_bool = list_bool = false;
    for(let counter = 0; counter < input_str.length; counter++) {
      switch(input_str[counter]) {
        case '\n':
          if(list_bool) {
            output_html += '</li>';
            list_bool = false;
          }
          if(input_str[counter+1] === '\n') {
            if(list_wrapper_bool) {
              list_wrapper_bool = false;
              output_html += '</ul>';
            } else {
              output_html += '<br>';
            }
          } else {
            if(input_str[counter+1] !== '-') {
              if(list_wrapper_bool) {
                list_wrapper_bool = false;
                output_html += '</ul>';
              } else {
                output_html += '<br>';
              }
            }
          }
          break;
        case ' ':
          if(input_str[counter-1] != ' ' && input_str[counter-1] != '\t') {
            output_html += ' ';
          }
          break;
        case '\t':
          if(input_str[counter-1] != '\t') {
            output_html += ' ';
          }
          break;
        case '-':
          if(input_str[counter-1] === '\n') {
            if(!list_wrapper_bool) {
              list_wrapper_bool = true;
              output_html += '<ul>';
            }
            list_bool = true;
            output_html += '<li>';
          } else {
            output_html += input_str[counter];
          }
          break;
        default:
          output_html += input_str[counter];
      }
    }
  }
  document.querySelector('#output_html').innerHTML = output_html;
}

