function renderTemplate(data) {
    const template = document.querySelector('#myTemplateContent');
    const templateContent = template.content.cloneNode(true);

    const templateVariables = templateContent.querySelectorAll('[data-variable]');
    templateVariables.forEach(variable => {
      const variableName = variable.dataset.variable;
      if (data.hasOwnProperty(variableName)) {
        if (variable.tagName === 'INPUT') {
          variable.value = data[variableName];
        } else {
          variable.textContent = data[variableName];
        }
      }
    });

    const container = document.querySelector('#r_container');
    container.appendChild(templateContent);
}

$('.save_data').click(function(){
  data_name = document.getElementById('first_name1')
  data_textarea = document.getElementById('textarea1')
  data_date = document.getElementById('date1')
  data_time = document.getElementById('time1')
  data_email = document.getElementById('indeterminate_checkbox')
  alert(data_textarea.value)
  const data = {'subject':data_name.value,
              'note':data_textarea.value,
              'date_date':data_date.value,
              'date_time':data_time.value,
              'email':data_email.value,}
  renderTemplate(data)
});