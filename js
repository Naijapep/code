 FasterCSV.foreach(File.join(RAILS_ROOT, 'db/data/country_currency_codes.csv' ), :headers => true) do |row|
     raise "Invalid row #{row.inspect}" unless row.size == 4
     currency = Currency.find_or_initialize_by_code(row['Code'])
     currency.description = row['Currency']
     currency.save!
     country = Country.find_or_initialize_by_code(row['CountryCode'])
     country.description = row['Country']
     country.currency = currency
     country.save!
   end        
