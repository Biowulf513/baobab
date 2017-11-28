from django.db import models

class Price(models.Model):
    class Meta:
        verbose_name = ('Цена')
        verbose_name_plural = ('Цены')
    name = models.CharField('Наименование' ,max_length=30)
    one_price = models.PositiveSmallIntegerField('Пробное занятие')

    four_price = models.PositiveSmallIntegerField('4 занятия')
    four_price_discount = models.PositiveSmallIntegerField('4 занятия скидкой')

    eight_price = models.PositiveSmallIntegerField('8 занятий')
    eight_price_discount = models.PositiveSmallIntegerField('8 занятий со скидкой')

    def __str__(self):
        return '%s ' %(self.name)

class Programs(models.Model):
    class Meta:
        verbose_name = ('Занятие')
        verbose_name_plural = ('Занятия')

    name = models.CharField('Название' ,max_length=30)
    for_group = models.CharField('Для кого?', max_length=30)
    description = models.TextField('Описание')
    price = models.ForeignKey (Price, verbose_name='Цены', on_delete=models.CASCADE)



    # def save(self, *args, **kwargs):
    #     from rusilomer.utils import location_geoconing
    #     geocod = location_geoconing(self.city, self.venue)
    #     self.gps_lat = geocod['lat']
    #     self.gps_lng = geocod['lng']
    #     super(Location, self).save(*args,**kwargs)

    def __str__(self):
        return '%s ' %(self.name)