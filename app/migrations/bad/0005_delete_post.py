# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-11-30 09:47
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20171130_1419'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Post',
        ),
    ]
