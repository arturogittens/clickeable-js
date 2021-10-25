const ClickeableJS = {
    clickeable_elements: function () {
        $("body").on("click", ".clickeable", function () {
            window.location.href = $(this).data('link');
        });

        $("body").on("mouseover", ".clickeable", function () {
            $(this).css("cursor", "pointer");
        });
    }
};