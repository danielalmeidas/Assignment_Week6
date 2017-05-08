var collection = [
    { text: 'Los Angeles', value: 'la' },
    { text: 'New York', value: 'nyc' },
    { text: 'San Francisco', value: 'sf' },
    { text: 'Sydney', value: 'sydney' },
    { text: 'Austin', value: 'austin' }
];

$(document).ready(function () {
    instanceDropdownComponent();
});

function instanceDropdownComponent() {

    collection.forEach(function (element) {
        var option = "<option value='" + element.value + "'>" + element.text + "</option>";
        $("#city-type").append(option);
    });

    $("#city-type").change(function (element) {
        var value = $("#city-type").val();
        changeBackgroundImage(value);
    });
}

function changeBackgroundImage(imageName) {
    $('body').attr('class', imageName);
}