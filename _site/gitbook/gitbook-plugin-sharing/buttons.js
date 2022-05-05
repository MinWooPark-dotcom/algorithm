require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {
      linkedin: {
        label: 'LinkedIn ',
        icon: 'fa fa-linkedin',
        onClick: function (e) {
          e.preventDefault()
          window.open('https://www.linkedin.com/in/minwoo-park-759298212')
        },
      },
      github: {
        label: 'GitHub',
        icon: 'fa fa-github',
        onClick: function (e) {
          e.preventDefault()
          window.open('https://github.com/MinWooPark-dotcom')
        },
      },
      email: {
        label: 'Email',
        icon: 'fa fa-envelope',
        onClick: function (e) {
          e.preventDefault()
          window.open('mailto:positive1attraction@gmail.com')
        },
      },
      notion: {
        label: 'Notion',
        icon: 'fa fa-notion',
        onClick: function (e) {
          e.preventDefault()
          window.open('https://www.notion.so/a12c05eb58da4b2da1c557173c20d301')
        },
      },
    }



    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        // Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: 'fa fa-share-alt',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        // Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
