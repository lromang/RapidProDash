var users = $.parseJSON(
             $.ajax({
                url: "http://rapidpro.datos.gob.mx/api/v2/contacts.json",
                type: 'GET',
                headers: { "Authorization": "Token " + "b481e05129acfff6eb13e00b8a89d7fc782fb229"}, 
                dateType: 'json',
                async:false
                }).responseText);
